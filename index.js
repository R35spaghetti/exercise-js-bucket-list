// const bucketListItem = document.createElement('p');
// bucketListItem.innerHTML = 'Bucket';
// document.body.appendChild(bucketListItem);
//
// const anotherBucketListItem = document.createElement('p');
// anotherBucketListItem.innerHTML = 'spacecraft';
// bucketListItem.insertAdjacentElement("afterend", anotherBucketListItem);
//
// const allP = document.getElementsByTagName('p');
// for (let i = 0; i < allP.length; i++) {
//     console.log(allP[i].innerHTML);
// }

const newDiv = document.createElement('div');
const stringInner = "This is a div element as a string";
newDiv.innerHTML = stringInner;
document.body.appendChild(newDiv);


const target = document.querySelector('.list');
const newItem = document.createElement('p');
newItem.innerHTML = "Bucket";
target.prepend(newItem);

for (let i = 1; i <= 3; i++) {
    const anotherItem = document.createElement('p');
    anotherItem.innerHTML = `new item ${i}`;
    target.append(anotherItem);
}
console.log(target.children.length);

const owner = document.querySelector('.owner');
owner.innerHTML = "Richard";

const replaceChild = document.createElement('p');
replaceChild.innerHTML = "drop database";
target.replaceChild(replaceChild,target.firstChild);