import React from 'react'
import { Popup } from 'reactjs-popup'


const SetPopup = ({ loadPopup, setTimer, setLoad }) => {


    var { deadlinedate, month, year, hour, minutes } = ""


    function Box({ x }) {
        return (
            <div className='flex flex-col justify-start align-middle h-10 w-15'
                style={{ width: "40px" }}>

                <input type="text" className='text-black '
                    maxLength="4"
                    onFocus={e => { e.target.select() }}




                    onChange={e => {
                        if (isNaN(e.target.value)) return false;

                        let array = Array.from(e.target.parentElement.parentElement.children)
                        let index = array.indexOf(e.target.parentElement)
                        let length = e.target.value.length

                        if ((e.target.parentElement.nextElementSibling)) {

                            if ((index === 0)&&(length>1)) {
                              e.target.parentElement.nextElementSibling.firstChild.focus();
                                    deadlinedate = (e.target.value)}
                            if ((index === 1)&&(length>1)) {
                              e.target.parentElement.nextElementSibling.firstChild.focus();
                                    month = (e.target.value)}
                            if ((index === 2)&&(length>3)) {
                              e.target.parentElement.nextElementSibling.firstChild.focus();
                                    year = (e.target.value)}
                            if ((index === 3)&&(length>1)) {
                              e.target.parentElement.nextElementSibling.firstChild.focus();
                                    hour = (e.target.value)}
                            if ((index === 4)&&(length>1)) {
                              e.target.parentElement.nextElementSibling.firstChild.focus();
                                    minutes = (e.target.value)}
                                
                                }
                                

       }} /><span>{x}</span></div>)
    }



    const give = ({ deadlinedate, month, year, hour, minutes }) => (
        {

            deadlinedate: `${deadlinedate}`,
            month: `${month}`,
            year: `${year}`,
            hour: `${hour}`,
            minutes: `${minutes}`

        })





    return (
        <Popup
            open={loadPopup} container={window}
            position="fixed" closeOnDocumentClick={false} >




            <div className='w-96 h-64  bg-blue-200 p-4  shadow-2xl flex flex-col
             gap-20 rounded-xl'

            >

                <div className=' flex flex-row justify-between' >

                    <Box x={"Date"} />
                    <Box x={"Month"} />
                    <Box x={"Year"} />
                    <Box x={"Hour"} />
                    <Box x={"Min"} />

                </div>


                <div className='flex flex-col flex-warp justify-between g-10'>
                    <span >The correct Format is DD/MM/YY/hh/mm</span>
                    <span >Note:please! put hr in 24hr format</span>

                    <button
                        className='text-black py-1 px-3 rounded-2xl hover:bg-blue-300'
                        style={{ border: "1px solid black", height: "auto", width: "fit-content" }}


                        onClick={() => {
                            setLoad(false)
                            setTimer(give({ deadlinedate, month, year, hour, minutes }))
                            console.log({ deadlinedate, month, year, hour, minutes });

                        }}>Enter</button>
                </div>

            </div>










        </Popup>
    )
}

export default SetPopup
