//Function to return gallery html
export function getGalleryData() {
    let output ='<section><header><h3>My Photography Gallery</h3></header><div class="CSSgal">' +    
    '<s id="s1"></s><s id="s2"></s><s id="s3"></s><s id="s4"></s><s id="s5"></s><s id="s6"></s>' +
    '<div class="slider"><div class="crop">' +
    '<img src="assets/MaroonBells.jpeg" alt="Photo of Marron Bells, CO"></div>' +
    '<div class="crop"><img src="assets/MonumentValley.jpeg" alt="Photo of Monument Valley, UT"></div>' +
    '<div class="crop"><img src="assets/NiagaraFalls.jpeg" alt="Photo of Niagara Falls, NY"></div>' +
    '<div class="crop"><img src="assets/Telluride.jpeg" alt="Photo of Telliuride, CO"></div>' +
    '<div class="crop"><img src="assets/OrmondBeach.jpeg" alt="Photo of Ormond Beach, FL"></div>' +
    '<div class="crop"><img src="assets/Portland.jpeg" alt="Photo of Portland, ME"></div></div>' +
    '<div class="prevNext"><div><a href="#s6"></a><a href="#s2"></a></div>' +
    '<div><a href="#s1"></a><a href="#s3"></a></div>' +
    '<div><a href="#s2"></a><a href="#s4"></a></div>' +
    '<div><a href="#s3"></a><a href="#s5"></a></div>' +
    '<div><a href="#s4"></a><a href="#s6"></a></div>' +
    '<div><a href="#s5"></a><a href="#s1"></a></div></div>' +
    '<div class="bullets"><a href="#s1">1</a><a href="#s2">2</a><a href="#s3">3</a><a href="#s4">4</a>'+
    '<a href="#s5">5</a><a href="#s6">6</a></div></div></section>';
    return output;
}