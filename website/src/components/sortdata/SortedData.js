//SortedData.js

// sortByDate.js
import { Data } from '../../../data/Data';
function SortByUpdatedDate(Data) {
  return Data.sort((a, b) => {
    // Parse dates to compare
    const dateA = new Date(`${a.details.updatedDate.date}T${a.details.updatedDate.time}`);
    const dateB = new Date(`${b.details.updatedDate.date}T${b.details.updatedDate.time}`);
    return dateB - dateA; // Ascending order
  });
}
export const SortByDate = SortByUpdatedDate(Data)


// sortByPopularity.js
export const SortByPopularity = Data.slice().sort((a, b) => {
  const dataA = a.details.popularity;
  const dataB = b.details.popularity;
  return dataB - dataA;
});
console.log(SortByPopularity)

// sortByTitle.js
export const SortByTitle = Data.slice().sort((a,b)=>{
 const titleA = a.details.title.toLowerCase()
 const titleB = b.details.title.toLowerCase()
 if(titleA < titleB) return -1
 if(titleA > titleB) return 1;
 return 0;
})
console.log(SortByTitle)

// sortByRating.j
export const SortByRating = Data.slice().sort((a,b)=> b.details.rating - a.details.rating)
console.log(SortByRating)
