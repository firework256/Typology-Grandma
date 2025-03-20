# Surveillance on Grandma

**Assignment 3.7** 
*Alexandra Slabakis*

---

## Project Intention
Myself and my parents recently installed a RING to watchover my grandma who lives in Florida. 
Our primary intention was to know what's going at her home when we aren't there since we live in New York. 
Grandma Ivy is 82.
After a few days of observation, my parents were really enjoying the type of activities she was up to: gardening, unboxing the chewy deliveries for her two big Main Coon cats.
We were most of all really suprised at how busy she was! The number of deliveries, visitors, the household is really busy.
I was toying with using some sort of surveillance dataset, but when it came to possibly pursuing my grandma's dataset, it felt a bit invasive.
I had the inkling thoguht that it could be really interest to purse through, and after taling with Golan, using my grandma's dataset is quite "wholesome".
I quite agree. So I set off to make a dataset that documented the surveillance my grandmother.

<img width="1326" alt="Screenshot 2025-03-20 at 4 12 05 PM" src="https://github.com/user-attachments/assets/a6a1c144-4d33-4a01-b375-b985d39ad7bb" />
<img width="659" alt="Screenshot 2025-03-20 at 4 12 34 PM" src="https://github.com/user-attachments/assets/b273dc72-584c-48b6-a4eb-30df756f2d48" />

[Find video]

*I feel that I should emphasize that my grandma doesn't know about this project. If I get it to a really great place, I'd like to eventually show her.*
*However, both my parent's are well aware of the project, and suprisingly encouraged it.*


# Challenges
I encountered a lot of challenges with the dataset. The most being that because it's a dataset, I truly care about, I don't want to screw it up, which is why I'll be refining it profusely.



## 1. Ring Videos - Full HD Resolution

First challenge I encountered was that I wasn't working with a stationary dataset, I had to observe my grandma frame by frame.
The very first time I attempted to extract the videos frame by frame, I had maximized the storage on my computer! 499 GB/499 GB
Why? I forgot to scale the resolution and I exporated every 30 fps :)
But that's trial and error! So onto a completely new FFMPEG trial.



## 2. Ring Videos - Scale & Crop
I realized I had to start from scratch. Deleted all the RING video footage and individual frame by frames.
After various testing, I decided to:
*Scale Video to 640x360
*Crop Video to 484x360, becuase it eliminatd the part of the window that was unnecessary.
*Export Frames every 1/2 fps (every 2 seconds)


##3 General Mosaic
From here, I tested what a mosaic would look like and I absolutely hated it!
There wasn't enough focus on the main person, and it just looked like the same image of my grandma's front door over and over again.
You couldn't tell what was interesting about the dataset.

![InitialTest_grid Large](https://github.com/user-attachments/assets/34308206-67d8-4a56-af24-90225a7d1d6f)





## 3. the ZOOM - How would I highlight Grandma?

I realized (a little too late) that I couldn't use every image.
Images of Grandma somewhat out of view as she gardened, specifically grandma in the light in between the palm trees, were likely images I should eliminate from my dashboard.

Ring Breakdown:
*Ring is 2 months of the most recent footage --> (Installed) February 15, 2025 - March 17th, 2025.
* There are exactly 250 videos - Ring allowed the export of 5 folders, which held 50 videos.
* Exported frames come to about 1,500 images per Ring folder of 50 videos.
* I had to go through and delete the images I didn't like








write** a few sentences about your dataset. What did you collect? Why did this data intrigue you? How did you collect it? What challenges did you overcome to collect/organize/use it? 

* The Syllabus can be found [here](https://github.com/golanlevin/gen-ai/blob/main/syllabus/readme.md)

## Daily Notes

* `Tue 01/14` [Hello](daily_notes/0114.md)
* `Th
* *Dates coming soon (and I'll provide some options to vote on).*
