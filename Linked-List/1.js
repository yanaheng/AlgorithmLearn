// 双指针法
// 解题思路：如果 A、B 两链表相交，则 A 、B 自相交点往后的链表是一致的。
//          我们可以尝试消除 A、B 链表的长度差，同步遍历消除长度差后的节点，判断是否有相同节点。
//          若有相同则是两链表相交，返回第一个相同节点 即可。否则返回 null ，两链表不相交。

// 解题步骤：同步遍历 A、B 链表 pA 、 pB ，直到遍历完其中一个链表（短链表），如上图，设A为长链表
//          那么此时 A、B 两遍表的长度差就为 pA 到链尾的长度，此时可以把 pB 指向长链表的表头 headA ，继续同步遍历，直到遍历完长链表
//          此时，headA 到 pB 的长度就为两链表的长度差，pB 到链表的长度与 headB 到链尾的长度一致
//          此时，可将 pA 指向 headB ，然后同步遍历 pB 及 pA ，直到有相交节点，返回相交节点，否则返回 null

/**
 * @param {object} headA
 * @param {string} headA.id
 * @param {object} headA.next
 * @return {object}
 */
const getIntersectionNode = (headA, headB) => {
    // 清除高度差
    let pA = headA, pB = headB
    while(pA || pB) {
        if(pA === pB) {
            return pA;
        }
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }
    return null
};

const C3 = { id : 'C3', next: null}
const C2 = { id : 'C2', next: C3}
const C1 = { id : 'C1', next: C2}
const A2 = { id : 'A2', next: C1}
const A1 = { id : 'A1', next: A2}
const B3 = { id : 'B3', next: C1}
const B2 = { id : 'B2', next: B3}
const B1 = { id : 'B1', next: B2}

console.log(getIntersectionNode(B1, B2))


// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-leetcode160xiang-jiao-lian-biao-by-user7746/