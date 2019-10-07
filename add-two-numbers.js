//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let index = 0;
    let arr=[];
    while (l1 !== null) {
        if (arr[index] === undefined) {
            arr[index] = 0;
        }
        arr[index] += l1.val;
        index++;
        l1 = l1.next;
    }
    
    index = 0;
    while (l2 !== null) {
        if (arr[index] === undefined) {
            arr[index] = 0;
        }
        arr[index] += l2.val;
        index++;
        l2 = l2.next;
    }
    
    
        if (arr[0] >= 10) {
            arr[0] -= 10;
            if (arr[1] === undefined) {
                arr[1] =0;
            }
            arr[1] += 1;
        }
    
    
    let result = new ListNode(arr[0]);
    let curr = result;
    
    for (let i = 1; i< arr.length; i++) {
        if (arr[i] >= 10) {
            arr[i] -= 10;
            if (arr[i+1] === undefined) {
                arr[i+ 1] =0;
            }
            arr[i + 1] += 1;
        }
        let next = new ListNode(arr[i]);
        curr.next = next;
        curr = curr.next;
    }
    return result;
};
