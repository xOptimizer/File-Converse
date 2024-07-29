// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className=" text-3xl md:text-6xl font-bold text-center">Document Converter</h1>
              <p className=" text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  
Explore your creativity with FileConverse – A top-notch online tool for converting multimedia files for free. Easily change images, audio, and videos without any limits. Start converting now to make your content better than ever!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}