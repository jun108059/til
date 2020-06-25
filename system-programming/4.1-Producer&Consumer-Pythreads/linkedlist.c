#include <stdlib.h>

#include "linkedlist.h"

void ListInit(struct LinkedList* plist){

   plist->numOfItems = 0;
   plist->head = NULL;
   plist->tail = NULL;
}

int isEmpty(struct LinkedList* plist){

	if(plist->numOfItems == 0){
		return TRUE;
	} else {
		return FALSE;
	}
}

int isFull(struct LinkedList* plist){

	if(plist->numOfItems == MAX_ITEM){
		return TRUE;
	} else {
		return FALSE;
	}
}


void insertItem(struct LinkedList* plist, int data) {
   struct Node * newNode = (struct Node*)malloc(sizeof(struct Node));
      newNode->data = data;
      newNode->next = NULL;

   if ( plist->head == NULL ) {
      plist->head = newNode;
      plist->tail = newNode;
   } else {
      plist->tail->next = newNode;
      plist->tail = newNode;
   }

   (plist->numOfItems)++;
}

int getItem(struct LinkedList* plist){

	struct Node* tmpNode;
	int ret;
	
	ret = plist->head->data;

	tmpNode = plist->head;
	plist->head = plist->head->next;

	free(tmpNode);
	(plist->numOfItems)--;

	return ret;
}

void freeAllNode(struct LinkedList* plist) {

	struct Node* tmpNode;
	tmpNode = plist->head;

	while(tmpNode != NULL){
		plist->head = plist->head->next;
		free(tmpNode);
		tmpNode = plist->head;

		(plist->numOfItems)--;
	}
}

