"use strict";
exports.__esModule = true;
exports.tableEditNonDisclosurePresenter = void 0;
var keyManager_1 = require("../../manager/keyManager");
exports.tableEditNonDisclosurePresenter = {
    tableHeaderid: keyManager_1.KeyManager.Id,
    tableHeaderName: keyManager_1.KeyManager.Name,
    tableHeaderAction: keyManager_1.KeyManager.Action,
    tableHeaderEmailPartyII: keyManager_1.KeyManager.StatusEmail,
    btnTextEdit: keyManager_1.KeyManager.Edit,
    btnTextDelete: keyManager_1.KeyManager.Delete,
    btnDownload: keyManager_1.KeyManager.Download,
    dataGetNonDisclosure: [],
    isLoadingTableEditAction: false,
    isAcknowledgeError: false,
    keyTableEditMessage: '',
    headerInProgress: keyManager_1.KeyManager.HeaderInProgress,
    headerEffective: keyManager_1.KeyManager.HeaderEffective,
    btnFinally: keyManager_1.KeyManager.BtnFinally,
    startDateEffective: keyManager_1.KeyManager.StartDateEffective,
    endDateEffective: keyManager_1.KeyManager.EndDateEffective,
    alert: keyManager_1.KeyManager.Alert
};
