import React, { useEffect, useState, useRef } from 'react'
import styles from './styles.module.css'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/qr.json'
import exportAsImage from '../../../utils/download'
import ElevateLogo from '../../EllwvateLogoSvg'
const QrInput = ({
  set,
  qrData,
  terminalId,
  marchantCode,
  information,
  amount,
}) => {
  const [qrDatas, setQrData] = useState('')
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const exportRef = useRef()
  useEffect(() => {
    setQrData(
      `data:image/png;base64,${decodeURIComponent(qrData)}`
        ?.split(' ')
        ?.join(''),
    )
  }, [qrData])
  return (
    <div className={styles.qrInp}>
      {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
      {set == 'qr' ? (
        <>
          <div ref={exportRef} className={styles.logoQr}>
            <div className={styles.qrFlex}>
              <div ref={exportRef}>
                <ElevateLogo />
                <br />
                <img src={qrDatas} width={254} height={254} />
              </div>
            </div>
            <p>{information?.qrMerchantInfo?.terminalName} QR Code</p>
            <div className={styles.qrInfo}>
              <p>Merchant ID:</p>
              <p>{marchantCode}</p>
            </div>
            <div className={styles.qrInfo}>
              <p>Terminal ID:</p>
              <p>{terminalId}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.logoQr}>
            <div className={styles.qrFlex}>
              <div ref={exportRef}>
                <ElevateLogo />
                <br />
                <img
                  src={`data:image/png;base64,${information?.qrMerchantInfo?.merchantsStaticQR}`}
                  width={254}
                  height={254}
                />
              </div>

              <div>
                <br />
                <p className={styles.qrNameP}>
                  {information?.qrMerchantInfo?.terminalName}
                </p>
                <div className={styles.qrInfo}>
                  <p>Merchant ID:</p>
                  <p>{information?.qrMerchantInfo?.merchantCode}</p>
                </div>
                <div className={styles.qrInfo}>
                  <p>Terminal ID:</p>
                  <p>{information?.qrMerchantInfo?.terminalId}</p>
                </div>

                <button
                  onClick={() => exportAsImage(exportRef.current, 'test')}
                >
                  {' '}
                  Download
                </button>
                <p className={styles.download}>Please Pay {amount}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default QrInput
