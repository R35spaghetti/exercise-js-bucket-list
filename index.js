const bucketListItem = document.createElement('p');
bucketListItem.innerHTML = 'Bucket';
document.body.appendChild(bucketListItem);

const anotherBucketListItem = document.createElement('p');
anotherBucketListItem.innerHTML = 'spacecraft';
bucketListItem.insertAdjacentElement("afterend", anotherBucketListItem);
