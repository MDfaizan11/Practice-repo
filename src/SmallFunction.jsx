import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { List } from "react-virtualized";
function SmallFunction() {
  const [loading, setLoading] = useState(false);
  const [ProductData, setProductData] = useState([]);
  const [Filterdata, setFilterData] = useState([]);
  //   function reverseString(word) {
  //     const result = [];
  //     for (let i = word.length - 1; i >= 0; i--) {
  //       result.push(word[i]);
  //     }
  //     console.log(result);
  //     const reverse = result.join("");
  //     console.log(reverse);
  //   }
  //   reverseString("faizan khan");

  function secoundRevserce(word) {
    const newWord = word.split(" ");
    console.log(newWord);
    const newSplit = newWord.map((item, index) => {
      return item.split("").reverse().join();
    });
    console.log(newSplit.join(" "));
  }

  secoundRevserce("faizan khan");

  async function getUserData() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProductData(data);
      setFilterData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleCategory = useCallback(
    (name) => {
      console.log(name);
      if (name === "All") {
        setFilterData(ProductData);
      } else {
        const filterData = ProductData.filter((item, index) => {
          return item.category === name;
        });
        console.log(filterData);
        setFilterData(filterData);
      }
    },
    [ProductData]
  );
  const rowRender = ({ index, key, style }) => {
    const product = ProductData[index];
    return (
      <div
        key={key}
        style={{
          ...style,
          padding: "10px",
        }}
      >
        <p>{product.title}</p>
        <p>{product.category}</p>
      </div>
    );
  };

  function reaverseMyName(word) {
    const finalResult = [];
    for (let i = word.length - 1; i >= 0; i--) {
      finalResult.push(word[i]);
    }
    console.log(finalResult);
    const result = finalResult.join("");
    console.log(result);
  }
  reaverseMyName("faizan");

  // find vowel
  // const myname = ["faizan khan"];
  // const vowel = ["i", "z"];
  // function findVowel(name) {
  //   const show = name.join("").toLowerCase();
  //   const result = show.split("").filter((ele) => vowel.includes(ele));
  //   console.log(result.length);
  // }
  // findVowel(myname);

  const Myname = "faizan khan";
  const vowels = ["a", "e", "i", "o", "k"];

  function fingvol(name) {
    const result = vowels.filter((char) => name.includes(char));
    console.log(result);
  }
  fingvol(Myname);

  const largeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const myresult = largeNum.reduce((pre, curr) => {
    if (curr > pre) {
      return curr;
    } else {
      return pre;
    }
  });

  console.log(myresult);

  const result = largeNum.every((num) => {
    return num / 2 === 0;
  });
  console.log(result);
  

  if (loading) {
    return <p> Loading...</p>;
  }
  return (
    <>
      <p>SmallFunction</p>
      <button onClick={() => handleCategory("All")}>All</button>
      <button onClick={() => handleCategory("men's clothing")}>
        men's clothing
      </button>
      <button onClick={() => handleCategory("jewelery")}>jewelery</button>

      {Filterdata.length > 0
        ? Filterdata.map((item, index) => {
            return (
              <>
                <p>{item.category}</p>
                <p>{item.title}</p>
              </>
            );
          })
        : "no product found"}
      <List
        width={400}
        height={400}
        rowRenderer={rowRender}
        rowHeight={50}
        rowCount={ProductData.length}
      />
    </>
  );
}

export default SmallFunction;
