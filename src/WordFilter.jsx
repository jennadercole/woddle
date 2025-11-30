import words from "an-array-of-english-words";

export default function WordFilter({wordStart, wordEnd, wordContains, wordDoesNotContain, wordLength})
{
    var fiveLetterWords = words.filter(word => word.length == wordLength);
    var containsLetterMatches = fiveLetterWords.filter(word => word.includes(wordContains)).filter(word => !word.includes(wordDoesNotContain));
    var wordStartMatches = containsLetterMatches.filter(word => word.startsWith(wordStart));
    var wordEndMatches = wordStartMatches.filter(word => word.endsWith(wordEnd));
    const filteredList = wordEndMatches.map(word => <li key={word}>{word}</li>);
    
    return <ul>{filteredList}</ul>;
}