#define TRUE 1
#define FALSE 0

#define MAX_ITEM	100

struct Node {
	int data;
	struct Node* next;
};

struct LinkedList {
   int numOfItems;
   struct Node* head;
   struct Node* tail;
};

// init. linked list
void ListInit(struct LinkedList* plist);

// check empty state
int isEmpty(struct LinkedList* plist);

// check full state
int isFull(struct LinkedList* plist);

// insert item into linked list
void insertItem(struct LinkedList* plist, int data);

// get item into linked list & deallocation node.
int getItem(struct LinkedList* plist);

// deallocation memory for all allocated nodes
void freeAllNode(struct LinkedList* plist);
