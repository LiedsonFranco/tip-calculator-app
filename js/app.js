var last_tip 
var remove_tip = false
const bill_tag = document.getElementById("bill")
const total_tag = document.getElementById("total")
const input_tip = document.getElementById("custom_tip")
const tip_amount_tag = document.getElementById("tip_amount")
const number_of_people_tag = document.getElementById("person")

function reset(){
    total_tag.innerText = 0
    tip_amount_tag.innerText = 0
    number_of_people_tag.value = 0
    bill_tag.value = 0
    input_tip.value = 0
}

function select_tip(value=0,btn){
    if(parseFloat(number_of_people_tag.value) <= 0 || parseFloat(bill_tag.value <= 0) ){
        return -1
    }
    if(remove_tip){
        last_tip.classList.remove('selected')
        last_tip.classList.add('tip')
    }
    btn.classList.remove('tip')
    btn.classList.add('selected')
    last_tip = btn
    remove_tip = true

    tip_amount_tag.innerText = (( parseFloat(value) / 100) * parseFloat(bill_tag.value) / number_of_people_tag.value).toFixed(2)
    total_tag.innerText = (parseFloat(tip_amount_tag.innerText) + (bill_tag.value / number_of_people_tag.value)).toFixed(2)
}

input_tip.addEventListener('input',() => {
    select_tip(input_tip.value, input_tip)
})
number_of_people_tag.addEventListener('input', () => {
    if( (parseInt(number_of_people_tag.value)) <= 0){
        document.getElementById('np_error').classList.remove('hidden')
        number_of_people_tag.classList.add('error')
    }else{
        document.getElementById('np_error').classList.add('hidden')
        number_of_people_tag.classList.remove('error')

    }
})
bill_tag.addEventListener('input', () => {
    if( (parseInt(bill_tag.value)) <= 0){
        document.getElementById('bill_error').classList.remove('hidden')
        bill_tag.classList.add('error')
    }else{
        document.getElementById('bill_error').classList.add('hidden')
        bill_tag.classList.remove('error')

    }
})
