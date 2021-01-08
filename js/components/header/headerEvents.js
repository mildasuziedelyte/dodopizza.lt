function headerEvents(){
        addEventListener('scroll', () => {
            if (scrollY > 70) {
                document.querySelector('.nav').classList.add('header-bottom-only');
                document.getElementById('logo-bottom').classList.add('logo-bottom-visible');
            } else {
                document.querySelector('.nav').classList.remove('header-bottom-only');
                document.getElementById('logo-bottom').classList.remove('logo-bottom-visible');
            }
        })

        let krepselis = document.getElementById('krepselis');
        krepselis.addEventListener("mouseover", () => {
            document.querySelector('.krepselis-hover').classList.add('krepselis-active');
        })
        krepselis.addEventListener("mouseout", () => {
            document.querySelector('.krepselis-hover').classList.remove('krepselis-active');
        })

        // let krepselisActive = document.querySelector('krepselis-hover');
        // krepselisActive.addEventListener("mouseover", () => {
        //     document.querySelector('.krepselis-hover').classList.add('krepselis-active');
        // })
        // krepselisActive.addEventListener("mouseout", () => {
        //     document.querySelector('.krepselis-hover').classList.remove('krepselis-active');
        // })

}

export { headerEvents }