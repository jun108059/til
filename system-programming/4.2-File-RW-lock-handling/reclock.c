#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>

#define TRUE    1
#define FALSE   0
 
#define NUM_RECORDS 100

struct record{
	char name[20];    // account owner
	int id;           // account umber
	int balance;      // balance
};

int reclock (int fd, int recno, int len, int type);
void display_record(struct record *curr);

int main()
{	
	struct record current;
	int record_no;
	int fd, pos, i, n;
	char yes;
	char operation;
	int amount;
	char buffer[100];
	int quit=FALSE;

	fd = open("./account", O_RDWR | O_CREAT, S_IRUSR | S_IWUSR);
	while (1) { 
		printf("enter account number (0-99): ");
		scanf("%d", &record_no);
		fgets(buffer, 100, stdin);

		if (record_no < 0 && record_no >= NUM_RECORDS) 
			break;
		printf("enter operation name (c/r/d/q): ");
		scanf("%c", &operation);

		switch (operation) {
			case 'c' : // create 
				reclock(fd, record_no, sizeof(struct record),F_WRLCK);
				pos = record_no * sizeof(struct record);
				lseek(fd, pos, SEEK_SET);
				printf("> id ? ");
				scanf("%d", &current.id);
				printf("> name ? ");
				scanf("%s", current.name);
				current.balance = 0 ;
				n = write(fd, &current, sizeof(struct record));
				display_record (&current);
				reclock(fd, record_no, sizeof(struct record), F_UNLCK);
				break;
			case 'r' : 	// inquiry
				reclock(fd, record_no, sizeof(struct record), F_RDLCK);
				pos = record_no * sizeof(struct record);
				lseek(fd, pos, SEEK_SET);
				n  = read(fd, &current, sizeof(struct record));
				display_record (&current);
				reclock(fd, record_no, sizeof(struct record), F_UNLCK);
				break;
			case 'd' : 	// deposit
				reclock(fd, record_no, sizeof(struct record), F_WRLCK);
				pos = record_no * sizeof(struct record);
				lseek(fd, pos, SEEK_SET);
				n = read(fd, &current, sizeof(struct record));
				display_record (&current);
				printf("enter amount\n");
				scanf("%d", &amount);
				current.balance += amount;
				lseek(fd, pos, SEEK_SET);
				write(fd, &current, sizeof(struct record));
				reclock(fd, record_no, sizeof(struct record), F_UNLCK);
				break;
			case 'q' :
				quit = TRUE;
				break;
			default : 
				printf("illegal input\n");
				continue;
		}
	}
	close(fd);
	fflush(NULL); 
}

int reclock (int fd, int recno, int len, int type)
{  
	struct flock fl;

	switch (type) {
		case F_RDLCK:
		case F_WRLCK:
		case F_UNLCK:
			fl.l_type = type;
			fl.l_whence = SEEK_SET;
			fl.l_start = recno * len;
			fl.l_len = len;
			fcntl (fd, F_SETLKW, &fl);
			return 1;
		default:
			return -1;
   }
}

void display_record(struct record *curr)
{
    printf("\n");
    printf("id: %d \n", curr->id);
    printf("name: %s \n", curr->name);
    printf("balance: %d \n", curr->balance);
    printf("\n");
}

