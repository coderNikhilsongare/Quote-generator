const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function getNewQuote () {
    try{
        newQuoteBtn.disabled = true ;
        newQuoteBtn.textContent = "LOADING....";
        const url = 'https://api.quotable.io/random';
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error ("Failed api sevices ");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        quoteText.textContent = data.content;
        author.textContent = `-${data.author}`;
    }
    catch (error){ 
        console.log(error);
        quoteText.textContent = " some problem while fectching the quote ";
    }
    finally{
        newQuoteBtn.disabled = false ;
        newQuoteBtn.textContent = " New Quote";
    }

}

newQuoteBtn.addEventListener('click' , getNewQuote)

getNewQuote()
