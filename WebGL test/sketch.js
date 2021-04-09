let angle;

let w;      // Length of box

let W;      // Length of shape

let R;

function setup() {
    createCanvas(400, 400, WEBGL);
    ortho(-100, 200, -150, 100, 0, 1000);
    angle = 0;
    w = 10;
    W = 15;
    R = floor(W / 3);
}

function draw() {
    background(240, 250, 150);
    //ortho(-400, 400, 400, -400, 0, 50);
    ambientLight(95, 75, 139);
    directionalLight(100, 100, 100, 0.5, 1, 1);

    rotateX(PI / 6);
    rotateY(PI / 4);

    for(let z = 0; z < W; z++){
        for(let x = 0; x < W; x++){
            push();
            let offset = map(dist(x, z, floor(W / 2), floor(W / 2)), 0, dist(0, 0, W, W), -7, 7);
            //offset = offset * (dist(x, z, floor(W / 2), floor(W / 2)) / dist(W / 2, W / 2, W, W));
            if(dist(x, z, floor(W / 2), floor(W / 2)) === 0)
                offset *= 0.03;
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 20, 100));
            translate(x * (w + 0) - width / 4, 0, z * (w + 0));
            box(w, h, w, 100, 100);
            pop();
        }
    }

    //    for(let z = -W; z <= W; z++){
    //        for(let x = -W; x <= W; x++){
    //            if(pow(x - floor(W / 2), 2) + pow(z - floor(W / 2), 2) <= pow(R, 2)){
    //                push();
    //                let offset = map(dist(x, z, floor(W / 2), floor(W / 2)), 0, dist(0, 0, W, W), -7, 7);
    //                if(dist(x, z, floor(W / 2), floor(W / 2)) === 0)
    //                    offset *= 0.03;
    //                let a = angle + offset;
    //                let h = floor(map(sin(a), -1, 1, 20, 100));
    //                translate(x * (w + 0) - width / 4, 0, z * (w + 0));
    //                box(w, h, w, 100, 100);
    //                pop();
    //            }
    //        }
    //    }

    angle -= 0.06;
}