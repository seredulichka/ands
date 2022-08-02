export function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

export function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

export function Node(val, children = []) {
  this.val = val;
  this.children = children;
}

export function DoublyLinkedNode(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

export const createTree = values => {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values.shift());
  const queue = [root];

  while (values.length > 0) {
    const node = queue.shift();

    const leftValue = values.shift();
    if (leftValue !== null) {
      node.left = new TreeNode(leftValue);
      queue.push(node.left);
    }

    const rightValue = values.shift();
    if (rightValue !== null && rightValue !== undefined) {
      node.right = new TreeNode(rightValue);
      queue.push(node.right);
    }
  }

  return root;
};