// In this exercise, let's try to solve a classic problem. Although, I do not condone this behaviour, I really would like
// to get an answer to this quesion.
// Some backstory, Bob is a thief. After months of careful planning, he finally manages to crack the security
// systems of a high-class bank...errr, apartment, I meant apartment.
// In front of him are many items, each with a value (v) and weight (w). Bob, of course, wants to maximize the
// total value he can get; he would gladly take all of the items if he could. However, to his horror, he realizes that
// the knapsack he carries with him can only hold so much weight (W).
// Given a knapsack with a specific carrying capacity (W), help Bob determine the maximum value he can getfrom the items in the house. Note that Bob can take only one of each item.
// All v given will be strictly positive. Items will be represented as a list of pairs,wi and vi , where the first
// element wi is the weight of theith item and vi is the value for that item.
// For example:
// Items: [ { "weight": 5, "value": 10 }, { "weight": 4, "value": 40 }, { "weight": 6, "value": 30 }, { "weight": 4, "value": 50 } ]
// Knapsack Limit: 10
// For the above, the first item has weight 5 and value 10, the second item has weight 4 and value 40, and so on.
// In this example, Bob should take the second and fourth item to maximize his value, which, in this case, is 90.
// He cannot get more than 90 as his knapsack has a weight limit of 10.
// Help us help Bob solve this classic problem and maybe get away with a bountiful loot(again, we don't condone
// this, but we are really curious).

const knapSack = (v, w, n, W) => {
    //Base case: Negative value
    if(W < 0){
      return Number.MIN_SAFE_INTEGER;
    }
    
    //Base case: no items left or capacity becomes 0
    if(n < 0 || W === 0){
      return 0;
    }
    
    // Case 1. include current item n in knapSack (v[n]) and recur for
    // remaining items (n - 1) with decreased capacity (weight - w[n])
    let include = v[n] + knapSack(v, w, n - 1, W - w[n]);
  
    // Case 2. exclude current item n from knapSack and recur for
    // remaining items (n - 1)
    let exclude = knapSack(v, w, n - 1, W);
    
    // return maximum value we get by including or excluding current item
    return Math.max(include, exclude);
  }


const v = [10,40,30,50];
const w = [5, 4, 6, 4];
const W = 10;

console.log(knapSack(v, w, v.length - 1, W));
