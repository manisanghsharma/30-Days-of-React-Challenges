import { useState } from "react"
const Number = ({item, list}) => {


    const checkPrime = (n) => {
        for (let i=2; i<n; i++){
            if(n%i==0){
                return 0;
            }
        }
        return 1;
    }
    const handleColor = (num) => {
        if(num==0 || num==2) return "#20BF73";
        if(num==1) return "#FCDB3A";
        const isPrime = checkPrime(num);
        if(isPrime){
            return "#FD5E53";
        }
        if(num%2==1){
            return "#FCDB3A";
        }
        return "#20BF73";
    } 

    return (
    <div className="bg-black w-32 h-32 text-white flex items-center
    justify-center text-3xl" style={{backgroundColor: handleColor(item.numb)}}>
        {item.numb}
    </div>
  )
}
export default Number