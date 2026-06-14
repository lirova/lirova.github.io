document.querySelectorAll(".cta-email").forEach(e=>{const a=atob(e.dataset.b||""),t=document.createElement("a");t.href=`mailto:${a}`,t.textContent=a,e.replaceWith(t)});
