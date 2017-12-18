# PrayForMe

## TODO

Prayer request REQUIRED category to pray for OPTIONAL act needed (mass, prayer,
good deed, scripture verse, ...) \
Prayer response REQUIRED act category (prayer, mass, good deed, scripture verse ...)

Scripture of the day (for all users)

Push notifications for prayer response for new prayer requests

    curl -X POST --header "Authorization: key=AAAAV-GEknc:APA91bFpel7oHC3MYegGDPBQ-yK8PjXBSskyJfbtQ4tdrnwHjTHq3nBM3djI4qYeluSo7F-UswTvqAbtewHI9LHsRfemJ7bVrihykPrBEOOJ-F2JO69kfQbp2lwF1kTuG8b5q3iT2H89" \
        --Header "Content-Type: application/json" \
        https://fcm.googleapis.com/fcm/send \
        -d "{\"to\":\"d7Nxk8eiKAw:APA91bGGSt7-a36EWMBrop5OWQdHvB_bJRr16dkzLox4cbQl8chM6fjrYS03qei8gnuBq_mAXoA2az5zFxn4YCqemPuBzbFVMGpgdhFOcPBDlEXXrpG0yhcgOhxGrm-jbNre8UlqtiJJ\",\"notification\":{\"body\":\"Yellow\"},\"priority\":10}"
