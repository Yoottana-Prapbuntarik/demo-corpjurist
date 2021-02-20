import React from 'react'
import { themeManager } from '../../../manager/themeManager'
import MainLayoutMember from '../../../components/MainLayoutMember/MainLayoutMember'
import { useRouter } from 'next/router'
import ConfirmMyNonDisclosure from '../../../components/ConfirmMyNonDisclosure/ConfirmMyNonDisclosureContainer'
const disclosure = () => {
  const router = useRouter()

  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainSubFolder}
      themePlugin={themeManager.ThemePluginMainSubFolder}
      themeScript={themeManager.ThemeScriptMainSubFolder}
    >
      <div className="text-center min-vh-100">
        <ConfirmMyNonDisclosure pkId = {router.query.pk_id} typeOfUser={router.query.party} />
      </div>
    </MainLayoutMember>
  )
}
export default disclosure
