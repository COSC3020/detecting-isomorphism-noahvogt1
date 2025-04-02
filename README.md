# Graph Isomorphism

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

First I talked with Gage and completely implimented a degree based approach that sorts nodes based on highest degree then maps them to the other graph. I found out that this didn't always work. So I decided to just write all of the permutations of the graph - keeping isomorphism with the original - instead and then just check it against the other graph. I came up with an idea on how the permutations should work to get all of the permutations of the graph but I couldn't impliment it. So I had help from chatGPT in which it helped me find all of the ways to permute the rows and columns which is shown by the generate all permutations function. I wrote the other code that checks to make sure that everything is equal or not.

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst-case big $\Theta$ time complexity of my algorithm should be $\Theta(|V|! * |V|^2)$
This is because finding all permutations of array of size |V| is |V|!. We then 
itterate through this. Then we create an empty matrix that will become our 
permuted matrix using one for loop which gives us |V|. Then we make the permuted 
graph using two for loops each of size |V| which is $|V|^2$. Checking that the 
matrices are equal also is $|V|^2$.
