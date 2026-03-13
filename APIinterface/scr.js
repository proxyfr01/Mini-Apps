async function askQuestion(){

const question = document.getElementById("question").value;

document.getElementById("answer").innerText = "Thinking...";

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCiTxdNSl-nCol3BOhO1VSddIvDF06ckpM",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({

contents:[
{
parts:[
{
text:`

You are a scholar of Hindu philosophy.

Your task is to answer questions using wisdom from authentic Hindu scriptures such as:

- Bhagavad Gita
- Upanishads
- Vedas
- Ramayana
- Mahabharata

Instructions:

1. Answer the user's question using teachings from these texts.
2. Quote or paraphrase relevant verses where possible.
3. Explain the meaning in simple modern English.
4. Keep the explanation practical.
5. If multiple perspectives exist in Hindu philosophy mention them.

Output format:

Relevant Teaching or Verse:

Meaning of the Teaching:

Practical Guidance:

User Question:
${question}

`
}
]
}
],

generationConfig:{
temperature:0.3
}

})

}

);

const data = await response.json();

const text =
data.candidates[0].content.parts[0].text;

document.getElementById("answer").innerText = text;

}