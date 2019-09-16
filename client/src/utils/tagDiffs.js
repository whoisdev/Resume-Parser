function getDiffTags (recuriterTags, resumeTags) {
  let matched = []
  let unmatched = []
  recuriterTags.forEach(element => {
    if (resumeTags.includes(element)) {
      if (matched.indexOf(element) === -1) matched.push(element)
    } else {
      unmatched.push(element)
    }
  })
  return { 'matched': matched, 'unmatched': unmatched }
}

export { getDiffTags }
