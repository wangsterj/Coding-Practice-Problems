// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
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
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
      if (l2 === null) {
          return null;
      }
      return l2;
  }
          if (l2 === null) {
          return l1;
      }
  let result;
  if (l1.val < l2.val) {
      result = new ListNode(l1.val);
      l1=l1.next;
  } else {
      result = new ListNode(l2.val);
      l2=l2.next;
  }
  let resulthead = result;
  while (l1 !==null && l2!==null) {
      if (l1.val < l2.val) {
          result.next = new ListNode(l1.val);
          l1 = l1.next;
          result = result.next;
      } else {
          result.next = new ListNode(l2.val);
          l2 = l2.next;
          result = result.next;
      }
  }
  if (l1 !== null) {
      result.next = l1;
  }
  if (l2 !== null) {
      result.next = l2;
  }
  return resulthead;
};