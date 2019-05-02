var oriented=["&#127199;","&#127167;","<span class='r'>&#127153;</span>","&#127185;","&#127137;","<span class='r'>&#127155;</span>","&#127187;","&#127139;","<span class='r'>&#127157;</span>", "&#127189;","&#127141;","<span class='r'>&#127158;</span>","&#127190;","&#127142;","<span class='r'>&#127159;</span>","<span class='r'>&#127175;</span>","&#127191;","&#127143;","<span class='r'>&#127160;</span>","&#127192;","&#127144;","<span class='r'>&#127161;</span>","&#127193;","&#127145;"];
var unoriented=["&#127154;","&#127156;","&#127162;","&#127163;","&#127165;","&#127166;","&#127169;","&#127170;","&#127171;","&#127172;","&#127173;","&#127174;","&#127176;","&#127177;","&#127178;","&#127179;","&#127181;","&#127182;","&#127186;","&#127188;","&#127194;","&#127195;","&#127197;","&#127198;","&#127138;","&#127140;","&#127146;","&#127147;","&#127149;","&#127150;"];
var joker3="&#127183;";
var alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ␣.,&!?";

function powerSet( list ){
	var set=[],
		combinationsCount=(1<<list.length),
		combination;

	for (var i=0;i<combinationsCount;i++){
		var combination=[];
		for(var j=0;j<list.length;j++){
			if(i&(1<<j)){
				combination.push(list[j]);
			}
		}
		set.push(combination);
	}
	return set;
}

function combinations(set,n){
	let c=[],counters=new Array(n);
	for(counters.fill(0);counters[n-1]<set.length;counters[0]++){
		let combi=[];
		for(let i=0;i<counters.length;i++){
			// compute carry
			if(counters[i]==set.length){
				counters[i]=0;
				if(i+1<counters.length)
					counters[i+1]+=1;
				else return c;
			}
			combi.push(set[counters[i]]);
		}
		c.push(combi.reverse());
	}
}

function uniqueCombinations(set,n){
	let x=combinations(set,n);
	return x.filter(e=>(new Set(e)).size==e.length);
}

let x=powerSet(["upsdwn","bf"]).map(e=>e.join(" "));
x=combinations(x,2);

var n=0;
for(let i=0;i<oriented.length;i+=2){
	let cards=uniqueCombinations(oriented.slice(i,i+2),2);
	cards.forEach((c)=>{
		x.forEach((e)=>{
			document.getElementById('or-out').innerHTML+=`<tr><td>o${n}</td><td><div class="card ${e[0]}">${c[0]}</div></td><td><div class="card ${e[1]}">${c[1]}</div></td><td>${alph[n%alph.length]}</td></tr>`;
			n++;
		});
	});
}

x=combinations([[],["bf"]],6).map(e=>e.map(f=>f[0]||""));

n=0;
for(let i=0;i<unoriented.length;i+=6){
	debugger;asdfasdfasdfasd;
	let cardsA=uniqueCombinations(unoriented.slice(i,i+4),3);
	let cardsB=uniqueCombinations(unoriented.slice(i,i+4),3);
	for(let j=0;j<cardsA.length;j++){
		cardsA[j].concat(cardsB[j]);
	}
	cards.forEach((c)=>{
		x.forEach((e)=>{
			console.log(e);
			document.getElementById('un-out').innerHTML+=`<tr><td>u${n}</td><td>${c[0]}</td></td><td></td></tr>`;
			n++;
		});
	});
}
