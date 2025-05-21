"use client"

import { useState, useRef, type ChangeEvent } from "react"
import { Upload, RefreshCw, Trash2, AlertCircle } from "lucide-react"
import Image from "next/image"

interface FileUploadProps {
  label?: string
  hint?: string
  onChange?: (files: File[]) => void
  maxFiles?: number
  accept?: string
  disabled?: boolean
  className?: string
}

interface FileItem {
  file: File
  id: string
  progress: number
  error: boolean
  uploaded: boolean
}

export function FileUpload({
  label,
  hint,
  onChange,
  maxFiles = 5,
  accept = "image/*",
  disabled = false,
  className = "",
}: FileUploadProps) {
  const [files, setFiles] = useState<FileItem[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      id: Math.random().toString(36).substring(2, 9),
      progress: 0,
      error: false,
      uploaded: false,
    }))

    // Simulate upload process
    const updatedFiles = [...files, ...newFiles].slice(0, maxFiles)
    setFiles(updatedFiles)

    if (onChange) {
      onChange(updatedFiles.map((f) => f.file))
    }

    // Simulate upload progress
    newFiles.forEach((fileItem) => {
      const simulateUpload = setInterval(() => {
        setFiles((currentFiles) => {
          const fileIndex = currentFiles.findIndex((f) => f.id === fileItem.id)
          if (fileIndex === -1) return currentFiles

          const updatedFiles = [...currentFiles]
          const currentProgress = updatedFiles[fileIndex].progress

          if (currentProgress >= 100) {
            clearInterval(simulateUpload)
            updatedFiles[fileIndex].uploaded = true
            return updatedFiles
          }

          // Random chance of error
          if (Math.random() > 0.95) {
            clearInterval(simulateUpload)
            updatedFiles[fileIndex].error = true
            return updatedFiles
          }

          updatedFiles[fileIndex].progress = Math.min(currentProgress + 10, 100)
          return updatedFiles
        })
      }, 300)
    })

    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleRetry = (id: string) => {
    setFiles((currentFiles) =>
      currentFiles.map((file) => {
        if (file.id === id) {
          return { ...file, progress: 0, error: false }
        }
        return file
      }),
    )

    // Simulate retry upload
    const simulateUpload = setInterval(() => {
      setFiles((currentFiles) => {
        const fileIndex = currentFiles.findIndex((f) => f.id === id)
        if (fileIndex === -1) return currentFiles

        const updatedFiles = [...currentFiles]
        const currentProgress = updatedFiles[fileIndex].progress

        if (currentProgress >= 100) {
          clearInterval(simulateUpload)
          updatedFiles[fileIndex].uploaded = true
          return updatedFiles
        }

        updatedFiles[fileIndex].progress = Math.min(currentProgress + 10, 100)
        return updatedFiles
      })
    }, 300)
  }

  const handleDelete = (id: string) => {
    setFiles((currentFiles) => {
      const updatedFiles = currentFiles.filter((file) => file.id !== id)
      if (onChange) {
        onChange(updatedFiles.map((f) => f.file))
      }
      return updatedFiles
    })
  }

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-sm font-medium text-uber-gray-700 mb-1">{label}</label>}

      <div className="flex items-center">
        <button
          type="button"
          onClick={handleUploadClick}
          disabled={disabled || files.length >= maxFiles}
          className="flex-1 flex items-center justify-center bg-uber-gray-50 hover:bg-uber-gray-100 text-uber-gray-700 py-3 px-4 rounded-lg transition-colors"
        >
          <Upload className="mr-2 h-5 w-5" />
          <span>Upload</span>
        </button>
        <button
          type="button"
          onClick={handleUploadClick}
          disabled={disabled || files.length >= maxFiles}
          className="ml-2 bg-uber-gray-50 hover:bg-uber-gray-100 p-3 rounded-lg transition-colors"
        >
          <span className="sr-only">Upload</span>
          <Upload className="h-5 w-5 text-uber-gray-700" />
        </button>
      </div>

      {hint && <p className="mt-1 text-sm text-uber-gray-500">{hint}</p>}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled || files.length >= maxFiles}
        className="hidden"
        multiple={maxFiles > 1}
      />

      {files.length > 0 && (
        <div className="mt-4 space-y-4">
          {files.map((fileItem) => (
            <div key={fileItem.id} className="border border-uber-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center p-3">
                <div className="h-16 w-16 bg-uber-gray-100 rounded-md overflow-hidden relative flex-shrink-0">
                  {fileItem.file.type.startsWith("image/") && (
                    <Image
                      src={URL.createObjectURL(fileItem.file) || "/placeholder.svg"}
                      alt={fileItem.file.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-uber-gray-900 truncate">{fileItem.file.name}</p>

                  {fileItem.error ? (
                    <div className="flex items-center text-uber-red mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Upload failed</span>
                    </div>
                  ) : (
                    <p className="text-sm text-uber-gray-500 mt-1">
                      {fileItem.uploaded ? "Description" : `${Math.round(fileItem.progress)}%`}
                    </p>
                  )}

                  {!fileItem.uploaded && !fileItem.error && (
                    <div className="w-full bg-uber-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-uber-black h-1 rounded-full" style={{ width: `${fileItem.progress}%` }} />
                    </div>
                  )}

                  {fileItem.uploaded && (
                    <div className="w-full bg-uber-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-uber-green h-1 rounded-full" style={{ width: "100%" }} />
                    </div>
                  )}

                  {fileItem.error && (
                    <div className="w-full bg-uber-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-uber-red h-1 rounded-full" style={{ width: "30%" }} />
                    </div>
                  )}
                </div>

                <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                  {fileItem.error && (
                    <button
                      type="button"
                      onClick={() => handleRetry(fileItem.id)}
                      className="text-uber-gray-500 hover:text-uber-gray-700 p-1"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDelete(fileItem.id)}
                    className="text-uber-gray-500 hover:text-uber-gray-700 p-1"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
