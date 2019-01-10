document.getElementById("itemsList").innerHTML = products.map(item => `<li>${item.name}<br> -${item.description}</li>`).join('')
