#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#include "./linkedList/linkedlist.h"

//shared variables
struct LinkedList bufList;

// pthread variables
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t buffer_has_space = PTHREAD_COND_INITIALIZER;
pthread_cond_t buffer_has_data = PTHREAD_COND_INITIALIZER;

void * producer(void * any){

	int i;
	for(i=0; i<1000; i++){
		pthread_mutex_lock(&mutex);

		if(isFull(&bufList)){	// buffer full !
			pthread_cond_wait(&buffer_has_space, &mutex);
		}

		// insert item into linked list(bufList).
		insertItem(&bufList, i);

		pthread_cond_signal(&buffer_has_data);
		pthread_mutex_unlock(&mutex);
	}
}

void *consumer(void * any){

	int i, data;
	for(i=0; i<1000; i++){
		pthread_mutex_lock(&mutex);

		if(isEmpty(&bufList)){	// buffer empty !
			pthread_cond_wait(&buffer_has_data, &mutex);
		}

		// get data at tail node into linked list(bufList)		
		data = getItem(&bufList);

		pthread_cond_signal(&buffer_has_space);
		pthread_mutex_unlock(&mutex);

		printf("data = %d\n", data);
	}
}


int main(int argc, char* argv[]){

	int i;

	// init. linked list
	ListInit(&bufList);

	// create two pthreads
	pthread_t threads[2];
	pthread_create (&threads[0], NULL, producer, NULL);
	pthread_create (&threads[1], NULL, consumer, NULL);

	for (i=0; i< 2; i++){
		pthread_join(threads[i], NULL);
	}

	// mem free all list nodes.
	freeAllNode(&bufList);

	return 0;
}
