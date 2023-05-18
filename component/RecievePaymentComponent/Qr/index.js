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
            <ElevateLogo />
            <img src={qrDatas} width={254} height={254} />
          </div>
          <p>{information?.qrMerchantInfo?.terminalName} QR Code</p>
          <div>
            <p>Merchant ID:</p>
            <p>{marchantCode}</p>
          </div>
          <div>
            <p>Terminal ID:</p>
            <p>{terminalId}</p>
          </div>
        </>
      ) : (
        <>
          <div ref={exportRef} className={styles.logoQr}>
            <ElevateLogo />
            <img
              src={`data:image/png;base64,${information?.qrMerchantInfo?.merchantsStaticQR}`}
              width={254}
              height={254}
            />
          </div>
          <p>{information?.qrMerchantInfo?.terminalName} static QR code</p>
          <div>
            <p>Merchant ID:</p>
            <p>{information?.qrMerchantInfo?.merchantCode}</p>
          </div>
          <div>
            <p>Terminal ID:</p>
            <p>{information?.qrMerchantInfo?.terminalId}</p>
          </div>

          <p
            className={styles.download}
            onClick={() => exportAsImage(exportRef.current, 'test')}
          >
            Download
          </p>
          <button>Pay {amount}</button>
        </>
      )}
    </div>
  )
}

export default QrInput
