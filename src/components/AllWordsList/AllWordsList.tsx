import { useEffect, useState } from "react";
import { getAllWords } from "../../utils/getAllWords";

export default function AllWordsList() {
  const [allWords, setAllWords] = useState([]);

  useEffect(() => {
    (async () => {
      setAllWords(await getAllWords());
      console.log('allWords', allWords);
    })();
  }, []);

  return (
    <div className="">
      {allWords.map((word: any) => (
        <p className="">{JSON.stringify(word)}</p>
      ))}
    </div>
  );
}
