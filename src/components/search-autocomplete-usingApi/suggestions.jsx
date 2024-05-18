export default function Suggestions({data , handleClick  }){
    return (
        <ul>
            {
                data && data.length ? data.map((item , index) => <li onClick={handleClick} key={index}>{item}</li>) :null
                /*
                Mapping the Array:

javascript
Copy code
? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
If the condition is true, this part of the code is executed. It uses the map method to create an array of <li> elements based on the data array.

data.map((item, index) => ...): This method iterates over each element in the data array.
item: The current element in the data array.
index: The current index of the element in the array, used as the key for each <li> element.
<li onClick={handleClick} key={index}>{item}</li>: For each item in the data array, it creates an <li> element:
onClick={handleClick}: Assigns an onClick event handler to each <li>. When an <li> element is clicked, the handleClick function is called.
key={index}: React requires keys to identify which items have changed, are added, or are removed. Here, the index of the item in the array is used as the key.
{item}: Displays the value of item inside the <li> element.  */
            }
        </ul>
    )
}