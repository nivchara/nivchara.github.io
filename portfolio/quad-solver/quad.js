function delta(a, b, c) {
    // delta = b2 - 4a*c.
    return (b ** 2) - (4 * a * c);
}

function rootList(a, b, c) {
    // TODO: allow for imaginary numbers
    // returns the roots of ax2 + bx + c
    // using the quadratic equation
    // x1 = (-b + sqrt(delta))/2a
    // x2 = (-b - sqrt(delta))/2a
    // sqrt means Math.sqrt()
    // delta can be found with delta(a,b,c)
    let roots = new Array();

    const d = Math.sqrt(delta(a, b, c));
    roots[0] = (-b + d) / (2 * a); //x1
    roots[1] = (-b - d) / (2 * a); //x2
    return (d ? roots : roots[0]);
}

function handle() {
    // print out the roots of the quadratic given by a b and c
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let x = rootList(a, b, c);
    // TODO: change HTML Based on results
    t = document.getElementById("t")
    if (!x && x !== 0) {
        /* If x[0] is NaN, delta was negative */
        // no roots
        t.innerHTML = "No Real Roots ";
        return
    }
    if (x.length - 1) {
        /* True if length is 2  */
        // 2 roots
        t.innerHTML = `roots are ${x}`;
        return
    }
    /* Default case */
    // 1 root
    t.innerHTML = `double root is at ${x} `;
    return x
        // roots.length is 1 or 2
        // roots[0] may not be a number
}