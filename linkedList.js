/**
 * Linked List Common patterns
 * 
 * 1. Two Pointers (Fast and Slow)
 * 2. Reverse Linked List
 * 3. Merged Lists
 * 4. Cycle detection removal
 * 5. Removing N-th node from end
 * 6. Finding intersection of two linked lists
 * 7. Palindrome Check
 * 8. Flattening Multilevel Doubly Linked List
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let root = new ListNode();
    let cur = root;

    while(list1 && list2) {
        if(list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        }
        else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 || list2;
    return root.next;
};


/**
 * 141. Linked List Cycle
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }

    return false;
};