{
    // This is a code block
    let x = 10; // This variable is scoped to this block
    console.log(x); // This statement is executed within this block
}

//Sample for For Nested Blocks and Variable Scopes.
{
    // This is a block scope
    let x = 10; // This variable is scoped to this block
    {
        // This is a nested block scope
        let y = 20; // This variable is scoped to this nested block
        console.log(x); // This can access x from the outer block
        console.log(y); // This can access y from the current block
    }
    console.log(x); // This can still access x from the current block
    console.log(y); // This cannot access y from the nested block
}
console.log(x); // This cannot access x from the block scope
console.log(y); // This cannot access y from the block scope
