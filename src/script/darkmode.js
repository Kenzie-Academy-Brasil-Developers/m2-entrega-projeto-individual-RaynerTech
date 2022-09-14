class darkMode{
    static showDark(){
    document.querySelector('.darkmodecontainer').insertAdjacentHTML('beforeend', `
    <input id="modedark" class="darkmode darkmode-style" type="checkbox" />
    <label for="modedark"></label>
    `)

    let button = document.querySelector('.darkmode')
    let body = document.body

    button.addEventListener('click', function(){
        body.classList.contains('dark-mode') 
        ? body.classList.remove('dark-mode')
        :body.classList.add('dark-mode')
    })   
}

}

export default darkMode