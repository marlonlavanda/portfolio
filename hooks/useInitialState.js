/* eslint-disable no-undef */
import { useState, useEffect } from "react"

const useInitialState = () => {
  const [switched, setSwitched] = useState(null)

  useEffect(() => {
    // switcher
    let switchData = localStorage.getItem("switcher")
    switchData = switchData !== null ? switchData : false

    setSwitched(switchData)
  }, [])

  return {
    switched,
    setSwitched,
  }
}

export default useInitialState
