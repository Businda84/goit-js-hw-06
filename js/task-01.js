const catategoriesEl = document.querySelector('#categories')

const itemsEl=document.querySelector('.item')


console.log('Number of categories:', catategoriesEl.children.length);

// console.log(itemsEl.textContent);
const items = [...catategoriesEl.children]


items.forEach((item) => {

    // console.log(item.children[0].textContent);
    // console.log(item.childNodes.length);
  //  console.dir(item.childNodes[3].children.length);

  console.log(`Category:${item.firstElementChild.textContent} \n Elements:${item.lastElementChild.children.length} `);
  // console.log(`Category:${item.children[0].textContent} \n Elements:${item.childNodes[3].children.length}`);
})


