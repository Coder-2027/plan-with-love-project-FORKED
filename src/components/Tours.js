 
import Card from './Card';

function Tours({tours, removeTour}) {               //Another way of receiving data in place of props, we know props was an object only from which we used to take data using dot operator [Now here we can directly use variable tours and removeTour]
    //						** point to be noted here is that we need to use same name as passed 
	return (
         <div className='container'>
            <div>
            <h2 className='title'>Plan With love</h2>
            </div>
            <div className='cards'>
            {												//***EXAMPLE OF MAP FUNCTION***
    			//const numbers = [65, 44, 12, 4];
				// const newArr = numbers.map(myFunction)						here we have just written name of the function we need not to write braces here
															// if we would have used here an arrow function then in that case we would be needed to write parameters
				// function myFunction(num) {
				//   return num * 10;
				// }
						// map() creates a new array from calling a function for every array element.

						// map() does not execute the function for empty elements.
						
						// map() does not change the original array.
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>			//returns an array of card tag
			//{...tour} is used for passing a copy of object *****Read about list and map in react doc***** from where we know that it is always essential to pass a key whenever using a map and the should be unique if we dont have a unique element then we pass index
                })
            }
            </div>
         </div>
    );
}
export default Tours;
