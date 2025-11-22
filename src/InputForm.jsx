import { useState } from "react";
import WordFilter from "./WordFilter";

export default function InputForm() {
    const [wordStart, setWordStart] = useState("");
    const [wordEnd, setWordEnd] = useState("");
    const [wordContains, setWordContains] = useState("");
    const [wordLength, setWordLength] = useState(5);

    return (
        <>
            <form>
                <label>Word starts with: </label>
                    <input type="text" value={wordStart} name="wordStart" onChange={(e) => setWordStart(e.target.value)} />
                <br></br>
                <label>Word ends with: </label>
                    <input type="text" value={wordEnd} name="wordEnd" onChange={(e) => setWordEnd(e.target.value)}/>
                <br></br>
                <label>Word contains: </label>
                    <input type="text" value={wordContains} name="wordContains" onChange={(e) => setWordContains(e.target.value)}/>
                <br></br>
                <label>Word length: </label>
                    <input type="text" value={wordLength} name="wordLength" onChange={(e) => setWordLength(e.target.value)}/>
                <br></br>
            </form> 

            <div class="wordFilter">
                <WordFilter 
                    wordStart={wordStart}
                    wordEnd={wordEnd}
                    wordContains={wordContains}
                    wordLength={wordLength}
                />
            </div>
            
        </>

    );
}