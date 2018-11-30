// part 3

//threading vis a vis "web workers"
//JS doesn't really handle threading directly
//HTML5 allows a sorta threading via web workers
//less control than with normal threading
//implemented through a messaging system
//they are async with whatever else is running on the page
//only browser can make updates; ww has to ask browser to do it
//and ww has other limits, like it can't access the DOM
//you'll see a nice symmetry in the code on both sides
//calling script and worker script
