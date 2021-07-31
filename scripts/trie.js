class TrieNode {

    constructor(endOfString = false) {
        this.children = new Map()
        this.endOfString = endOfString
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(text) {
        let parent = this.root
        for (let i = 0; i < text.length; ++i) {
            if (!parent.children.get(text[i])) {
                parent.children.set(text[i], new TrieNode())
            }
            parent = parent.children.get(text[i]);
        }
        if (parent.endOfString) {
            return false
        }
        parent.endOfString = true
        return true
    }
    insert_list(words) {
        for (let s of words) {
            this.insert(s)
        }
    }
    search(text) {
        let parent = this.root;
        for (let i = 0; i < text.length; ++i) {
            if (!parent.children.get(text[i])) {
                return false;
            }
            parent = parent.children.get(text[i])
        }
        return parent.endOfString
    }
    lookup(words, parent, prefix) {
        if (parent.endOfString) {
            words.push(prefix)
        }

        if (parent.children.size === 0) {
            return
        }

        for (let [char, child] of parent.children) {
            this.lookup(words, child, prefix + char)
        }
    }
    startsWith(prefix) {
        let parent = this.root;
        for (let i = 0; i < prefix.length; ++i) {
            if (!parent.children.get(prefix[i])) {
                return null;
            }
            parent = parent.children.get(prefix[i])
        }
        let words = []
        this.lookup(words, parent, prefix);
        return words
    }
}
export default Trie
