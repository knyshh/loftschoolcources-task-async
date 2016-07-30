module.export = timer;

function timer(time){
    return new Promise((resolve, reject) => {
            setTimeout(resolve, time);
});
};

