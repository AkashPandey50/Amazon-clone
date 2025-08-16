// const div = document.getElementById("parent");
// const h2=document.createElement("h2");
// h2.innerText="welcome to react JS";
// console.log(h2);
// div.appendChild(h2);
// h2.style.color="grey";

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);

//JS
// const h2=React.createElement("h2",{style:{color:'red'}},"welcome to reactjs"); //emement 3 element leta haii root ke andar
// const li1=React.createElement("li",{},"orange");
// const li2=React.createElement("li",{style:{color:'red'}},"apple");
// const li3=React.createElement("li",{},"banana");
// const li4=React.createElement("li",{},"mango");
// const ul=React.createElement("ul",{style:{backgroundColor:"yellow"}},li1,li2,li3,li4);


//JSX
const h1=React.createElement("h1",{},"by react create element");
const h11=<h1>creating h1 using JSX</h1>
const li1=<li>orange</li>;
const li2=<li>mango</li>;
const li3=<li>banana</li>;
const li4=<li>papaya</li>;
const ul=<ul>{li1}{li2}{li3}{li4}</ul>
const mystyle={
    backgroundColor:"red"
}
const container=(
    <div style={mystyle}>
    <div>wlecome to react</div>
    <div>{ul}</div>
    <div>{h11}</div>
    </div>
)
root.render(container);

