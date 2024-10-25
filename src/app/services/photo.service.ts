import { Injectable } from '@angular/core';
//en javascript el orden de importacion de librerias si importa

import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera"
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = []
  constructor() { }

  public async addNewToGallery() {
    //take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100

    })

    //save the picture and add it to photo collection
    const saveImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(saveImageFile);


    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    })


  }
  private async savePicture(photo: Photo) {
    //Convert photo to base64 format, required by filesystem api to save
    const base64Data = await this.readAsBase64(photo);

    //Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    }

  }

  private async readAsBase64(photo: Photo) {
    //fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  }
  )


}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}


