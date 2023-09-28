'use client'
import Link from 'next/link';
import React, { useState } from 'react';
export default LoginScreen;

function LoginScreen() {
  
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", marginTop: "20%", marginBottom: "20%",  margin: "auto", width: "50%" }}>
    <div style={{ margin: "auto", width: "50%", padding: "10px", textAlign: "center", marginBottom: "20%" }}>
      <h5>Please Choose Your Auth Type</h5>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", textAlign: "center" }}>
      <Link href="/Parent" legacyBehavior>
        <button className="btn btn-lg btn-primary" type="submit">Parent Login</button>
      </Link>
      <Link href="/Childeren" legacyBehavior>
        <button className="btn btn-lg btn-primary" type="submit">Children Login</button>
      </Link>
    </div>
  </div>
  
  )
}