class LocalNotificationUtil{addNotification(i,o,t,a,c,n,f){if(!("LocalNotification"in window))throw new Error("LocalNotificaion is not exists.");window.LocalNotification.addNotification(i,o,t,a,c,n,f)}clearNotification(i,o){if(!("LocalNotification"in window))throw new Error("LocalNotificaion is not exists.");window.LocalNotification.clearNotification(i,o)}}