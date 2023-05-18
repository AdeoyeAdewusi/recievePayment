import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import ElipseSvg from '../../ElipseSvg'
import { AiFillCheckCircle } from 'react-icons/ai'

const BillingAddress = ({ action, newPage }) => {
  const [activeBtn, setActiveBtn] = useState(true)
  const Ref = useRef(null)
  const [timer, setTimer] = useState('00:30:00')

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    return {
      total,
      hours,
      minutes,
      seconds,
    }
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      )
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer('00:30:00')

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const getDeadTime = () => {
    let deadline = new Date()

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 50)
    return deadline
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  // const onClickReset = () => {
  //     clearTimer(getDeadTime());
  // };
  return (
    <div className={styles.cardDtsInputs}>
      <div>
        <div className={styles.logos}>
          {/* <img src="/Assets/Images/eraImage.png" width={104} height={34} />
          <div>
            <p>Marvelous Solutions</p>

            <p>marvelousc</p>
          </div> */}
        </div>
      </div>
      <div className={styles.takeDiv}>
        {timer}
        <p className={styles.takeP}>
          Its taking longer than expected to confirm your transfer. You dont
          have to wait here till you confirm it
        </p>
      </div>
      <div className={styles.loadFlex}>
        <div>
          <AiFillCheckCircle style={{ fontSize: '40px', color: '#6CCF00' }} />
          <p className={styles.recSent}>Sent</p>
        </div>
        <div className={styles.load}></div>
        <div>
          <ElipseSvg />
          <p className={styles.recSent}>Recieved</p>
        </div>
      </div>

      <div className={styles.allCardDets}>
        <div className={styles.button}>
          <div className={styles.cancelBtn}>
            {/* <p onCLick={action} className={styles.cancelPay}>
              Back
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingAddress
