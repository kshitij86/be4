/**
 * Suppose there is a circle. There are N petrol pumps on that circle.
 * You will be given two sets of data.
 *
 * 1. The amount of petrol that every petrol pump has.
 * 2. Distance from that petrol pump to the next petrol pump.
 *
 * Find a starting point where the truck can start to get through
 * the complete circle without exhausting its petrol in between.
 *
 * Note :  Assume for 1 litre petrol, the truck can go 1 unit of distance.
 *
 * Example 1:
 * N = 4
 * Petrol = 4 6 7 4
 * Distance = 6 5 3 5
 * Output: 1
 *
 * p = [{petrol: 4, distance: 6}, {petrol: 6, distance: 5}, {petrol: 7, distance: 6}, {petrol: 4, distance: 5}]
 *
 *
 *
 * We can interate over the array and try to find how much fuel we need to get to next stop
 * Compare petrol and disctance to find out the petrol
 *
 *         p=0
           [A]
    p=5           p=6
    [D]           [B]

          p=8
          [C]       


    If you start at a petrol station, and you go forward.
    At A you find that you don;t have enough petrol to go to B.
    You can just return.
 * 
 * 
 * 1. Start frorm first index, take petrol and distance (p[i].petrol - p[i].distance)
 *    Value of petrol that is needed. If this value is < 0, ==0 , >0
 *
 *      If this is the case then make sure that you can actually complete from another pump
 *      p[i].petrol <  p[i].distance [A-B, petrol = 6, distance = 7][This means we don't required petrol]
 *     
 *      GOOD CASES
 *      For these cases make sure that you can actually complete the circle
 *      p[i].petrol - p[i].distance == 0 [A-B, petrol = 7, distance = 7][This means we have enough petorl]
 *      p[i].petrol - p[i].distance > 0 [A-B, petrol = 7, distance = 6][This means we have enough petorl]
 *
 *  2. Maintain a start variable, start = 0
 *     If I don't have enough fuel at any time, start will increment,
 *     Else start will remoin where it is
 * 
 *  3. You can keep a track of all the petrol that you will need
 *
 *
 *
 *                  i
 * Petrol =  [4 6 7 4]
 * Distance =[6 5 3 5]
 * 
 * deficit = -2
 * balance = 4
 * start = 1
 * i = 4
 * 
 * 
 * Give me 4 pencils, and you have 4 pencils you will 1 left
 * 
 * T.C = O(n)
 * S.C = O(1)
 * 
 * 
 */

function tour(p, n) {
  // variables to keep track of fuel
  // the amount of petrol of extra needed
  let deficit = 0;
  // balance is the amount of petrol you will have extra
  let balance = 0;
  // starting index, which is the result
  let start = 0;
  // start iterating on the index
  for (let i = 0; i < n; i++) {
    // calculate the amount of balance fuel we have
    balance = balance + (p[i].petrol - p[i].distance);

    // if more fuel is needed, then reset balance, and add to deficit
    // increment start to start you journey at next petrol pump
    if (balance < 0) {
      deficit += balance;
      start = i + 1;
      balance = 0;
    }
  }

  // If you have more fuel than required, or exactly that much fuel you can start here
  if (deficit + balance >= 0) {
    return start;
  } else {
    return -1;
  }
}
let p = [
  { petrol: 4, distance: 6 },
  { petrol: 6, distance: 5 },
  { petrol: 7, distance: 3 },
  { petrol: 4, distance: 5 },
];
let n = p.length;

console.log(tour(p, n));

// https://forms.gle/1jHJnjRSXd6SWGbe6
